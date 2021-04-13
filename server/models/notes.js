import mongoose from 'mongoose';

const notesSchema = mongoose.Schema({
    title: String,
    text: String
})

const Notes = mongoose.model('Notes',notesSchema);
export default Notes;