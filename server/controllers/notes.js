import Notes from '../models/notes.js';

export const getPosts = async (req,res) => {
    const notes = await Notes.find();
    res.status(200).json(notes);
}

export const addPost = async (req,res) => {
    
    const Note = req.body;
    const newNote = new Notes(Note);
    try {
       await newNote.save();
        res.status(200).json(newNote);
    } catch (error) {
        console.log(error);
    }
}