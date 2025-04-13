<main className="flex gap-3">
     <Sidebar />
     <div className="p-4 flex-1 max-w-[1200px]">
          {archivedNotes.length > 0 ? (
               <div className="flex flex-wrap gap-6">
                    {archivedNotes.map(({ id, title, description }) => (
                         <Notescard
                              key={id}
                              id={id}
                              title={title}
                              description={description}
                              isArchived={true}
                         />
                    ))}
               </div>
          ) : (
               <div className="text-center text-gray-500 mt-8">
                    <p>No archived notes found</p>
               </div>
          )}
     </div>
</main> 