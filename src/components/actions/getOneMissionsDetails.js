import axios from "axios";

export const getOneMissionsDetails = async (id, setMission) => {
        const response = await axios.get(`https://api.spacexdata.com/v5/launches/${id}`)
        setMission(response.data)
}