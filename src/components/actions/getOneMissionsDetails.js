import axios from "axios";

export const getOneMissionsDetails = async (id, setMission) => {
        const response = await axios.get(`https://api.spacexdata.com/v5/launches/${id}`)
        setMission(response.data)
}

// Делаем запрос на сервер, где сервер возращает по переданному нами id один элемент.