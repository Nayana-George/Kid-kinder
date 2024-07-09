import { Teachermodel } from "../model/teachermodel.js";

export const getTeacher = async (req, res) => {
  try {
    const items = await Teachermodel.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTeacherId = async (req, res) => {
  try {
    const teacherID = req.params.id;
    const teacher = await Teachermodel.findById(teacherID);

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.status(200).json(teacher);
  } catch (error) {
    console.error('Error fetching teacher details:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const AddTeacher = async (req, res) => {
  try {
    const { teachername, department } = req.body;
    const imageFile = req.file;

    if (!teachername) {
      return res.status(400).json({ message: 'Teacher name is required' });
    }

    const teacher = new Teachermodel({
      teachername,
      department,
      image: imageFile ? {
        data: imageFile.buffer,
        contentType: imageFile.mimetype,
      } : null,
    });

    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    console.error('Error adding teacher:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTeacher = await Teachermodel.findByIdAndDelete(id);

    if (!deletedTeacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    console.error('Error deleting teacher:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    if (req.file) {
      updateData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updatedTeacher = await Teachermodel.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedTeacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.status(200).json(updatedTeacher);
  } catch (error) {
    console.error('Error updating teacher:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
