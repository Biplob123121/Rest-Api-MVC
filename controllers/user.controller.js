const getAllUser = (req, res) =>{
    res.status(200).json({
      message: "all users"
    });
};
const getOneUser = (req, res) =>{
    res.status(200).json({
      message: "one user is here"
    });
};
const createUser = (req, res) =>{
    res.status(201).json({
      message: "user is created"
    });
};
const updateUser = (req, res) =>{
    res.status(200).json({
      message: "user is updated"
    });
};
const deleteUser = (req, res) =>{
    res.status(200).json({
      message: "user is deleted"
    });
};


module.exports = {getAllUser, getOneUser, createUser, updateUser, deleteUser};