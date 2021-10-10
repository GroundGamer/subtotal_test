import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./reducers";

import "./index.scss";

render(
    // Прокидываем наши состояния в компоненты
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root") // По данному id указанном в .html, мы передаём компонент app и все его вложения
)