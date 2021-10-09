import axios from "axios";
import {setFetchError, setIsFetching, setMissions} from "../../reducers/missionsReducer";

export const getMissionsSearch = (searchQuery) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await axios.get('https://api.spacexdata.com/v5/launches')
            const sorted_missions = response.data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())
                && Number(item.date_local.split('-')[0]) >= 2015
                && Number(item.date_local.split('-')[0]) <= 2019 && item.success)
            dispatch(setMissions(sorted_missions))
        }
        catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
        }
    }
}