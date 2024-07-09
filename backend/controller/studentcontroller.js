import studentmodel from "../model/studentmodel.js";

export const getDetails1 = async (req, res) => {
  try {
    const items = await studentmodel.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBookingDetails1 = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await studentmodel.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error('Error fetching booking details:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const Addclass = async (req, res) => {
  try {
    const { classname, totalseats, classtime, tuitionfee, description } = req.body;
    const imageFile = req.file;

    const student = new studentmodel({
      classname,
      totalseats,
      classtime,
      tuitionfee,
      description,
      image: {
        data: imageFile.buffer,
        contentType: imageFile.mimetype
      }
    });

    await student.save();
    res.status(201).json(student);
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteClass = async (req, res) => {
  try {
    const classId = req.params.id;
    const result = await studentmodel.findByIdAndDelete(classId);

    if (!result) {
      return res.status(404).json({ message: 'Class not found' });
    }

    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.error('Error deleting class:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateClass = async (req, res) => {
  try {
    const classId = req.params.id;
    const updateData = req.body;

    if (req.file) {
      updateData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype
      };
    }

    const updatedClass = await studentmodel.findByIdAndUpdate(classId, updateData, { new: true });

    if (!updatedClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    res.status(200).json(updatedClass);
  } catch (error) {
    console.error('Error updating class:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};