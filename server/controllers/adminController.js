// admin ka kam ye krna rhega is project me


const getAllUsers = async (req,res) => {
    res.send("All Users Here...")
}

const updateUser = async (req,res) =>{
    res.send("User Updated...!")
}




const adminController = {getAllUsers , updateUser}

export default adminController