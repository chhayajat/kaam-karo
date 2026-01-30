const listProject = async (req,res) => {
    res.send("List Project!")
}

const checkProjectApplications = async(req,res) => {
    res.send("All Project applications here...")
}


const acceptProjectRequest = async (req,res) => {
    res.send("Project request accepted")
}

const updateProjectStatus = async(req,res) => {
    res.send("Project Status Updated")
}



const projectController = {listProject ,checkProjectApplications,acceptProjectRequest , updateProjectStatus}

export default projectController