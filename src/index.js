import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, labore! Facilis, earum deleniti tempora magnam, totam rerum porro a quis consectetur, praesentium nisi cupiditate? Suscipit, quod autem consectetur nulla cumque reprehenderit nihil atque voluptatibus labore culpa, sint dolore voluptatem doloremque magnam itaque, accusantium ipsa in natus provident facere? Voluptates vitae vero, nam ipsum et quae minus expedita. Reiciendis, quasi. Laboriosam, iusto inventore alias obcaecati debitis provident eligendi error nostrum esse enim ipsa officiis doloremque. Velit harum quibusdam, tempore officia provident fugiat aliquam corrupti corporis hic laudantium aliquid ipsam animi iusto quod deleniti maiores saepe sapiente nesciunt, fuga iure dicta id laboriosam dolor? Nisi aliquid unde reiciendis dolore quas, delectus mollitia nam incidunt odio, porro quisquam impedit consequuntur? Velit, dicta placeat. Sint, excepturi molestiae exercitationem aut pariatur nihil ut alias? Repellat nam ut architecto ipsam voluptates tempora molestias enim nisi error dolore iusto, eaque praesentium deserunt numquam. Cupiditate ipsam necessitatibus nemo, suscipit molestias, sit soluta cumque magni vitae doloremque excepturi accusantium alias animi repellat repellendus ipsa veritatis, dolores enim? Iusto ad provident, ipsam nisi a atque voluptatum dolorum hic eligendi itaque! Mollitia, doloribus suscipit dignissimos iusto sapiente beatae perspiciatis obcaecati laborum voluptatem temporibus similique quisquam sunt, et provident rem tenetur esse hic id! Et culpa nostrum nulla adipisci facilis animi ratione, ullam suscipit, architecto sapiente tempore eligendi odio ad reiciendis dicta blanditiis dolor deleniti esse. Accusamus beatae saepe iste, reprehenderit est asperiores dolorem, eligendi cumque, non in quos aliquid molestias ea sint enim deleniti deserunt assumenda distinctio! Excepturi, id. Natus, consectetur?";
ReactDOM.render(
  <React.StrictMode>
    <App question={{number:3,text:text}} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
