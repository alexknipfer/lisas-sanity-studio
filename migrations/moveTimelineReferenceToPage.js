import { getCliClient } from 'sanity/cli'

const client = getCliClient()

// Go to your project folder and run this script in your terminal with:
// `sanity exec migrations/renameField.js --with-user-token`
const fetchTimelineDocuments = () => client.fetch(`*[_type == 'timeline'][0]`)
const fetchTimelinePage = () => client.fetch(`*[_type == 'page' && slug.current == 'timeline']`)

const buildPatches = (docs, timelineYears) =>
  docs.map((doc) => ({
    id: doc._id,
    patch: {
      set: {
        pageBuilder: [
          {
            _type: 'timelineObject',
            timelineYears: timelineYears.map((timelineYear) => ({
              year: timelineYear.year,
              timelineItems: timelineYear.timelineItems.map((timelineItem) => ({
                name: timelineItem.name,
                description: timelineItem.description,
              })),
            })),
          },
        ],
      },
      // this will cause the transaction to fail if the documents has been
      // modified since it was fetched.
      ifRevisionID: doc._rev,
    },
  }))

const createTransaction = (patches) =>
  patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction())

const commitTransaction = (tx) => tx.commit()

const migrateNextBatch = async () => {
  const timelineDocuments = await fetchTimelineDocuments()
  const documents = await fetchTimelinePage()

  const patches = buildPatches(documents, timelineDocuments.timelineYears)
  if (patches.length === 0) {
    console.log('No more documents to migrate!')
    return null
  }
  console.log(
    `Migrating batch:\n %s`,
    patches.map((patch) => `${patch.id} => ${JSON.stringify(patch.patch)}`).join('\n'),
  )
  const transaction = createTransaction(patches)
  await commitTransaction(transaction)
  return migrateNextBatch()
}

migrateNextBatch().catch((err) => {
  console.error(err)
  process.exit(1)
})
