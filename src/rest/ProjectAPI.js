const Project_ENDPOINT = 'https://6405117feed195a99f7baa23.mockapi.io/CharaList/Webpage'

class ProjectAPI {
    constructor() {

    }

    //Read Command for the Entire Project.
    get = async () => {
        try {
            const resp = await fetch(Project_ENDPOINT)
            const data = await resp.json();
            console.log(data)
            return data;
        } catch(e) {
            console.log("There is an issue with Fetching the Project.")
        }
    }

    
}

export default ProjectAPI;