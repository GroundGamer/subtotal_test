import axios from "axios";
import {setFetchError, setIsFetching, setMissions} from "../../reducers/missionsReducer";

export const getMissionsDetails = () => {
    return async (dispatch) => {
        try{
            dispatch(setIsFetching(true))
            const response = await axios.get('https://api.spacexdata.com/v5/launches')
            const sorted_missions = response.data.filter(item => Number(item.date_local.split('-')[0]) >= 2015
                && Number(item.date_local.split('-')[0]) <= 2019 && item.success)
            dispatch(setMissions(sorted_missions))
        }
        catch (e){
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
        }
    }
}

// Делаем запрос на сервер, где сервер возращает массив данных, затем мы их сортируем
// и сохраняем в массив миссий отсортированных по годам, от 2015 до 2019.
// Также в случае ошибки, нас перебрасывает на страницу ошибки