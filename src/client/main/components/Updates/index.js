import React from "react";
import "./style.scss";

const updatesData = [
  {
    date: "01 июня 2020",
    action: "Новый жираф",
    name: "Пряник",
    status: "Ожидается",
  },
  {
    date: "20 апр 2020",
    action: "Новый жираф",
    name: "Матильда",
    status: "Выполнено",
  },
  {
    date: "15 апр 2020",
    action: "Редактировать",
    name: "Шнур",
    status: "Не подтвержден",
  },
  {
    date: "05 апр 2020",
    action: "Удалить",
    name: "Ракета",
    status: "Выполнено",
  },
  {
    date: "04 апр 2020",
    action: "Перевод",
    name: "Леонид",
    status: "Отклонено",
  },
];
export default function Updates() {
  return (
    <div className="updates">
      <h5>Обновления</h5>

      <table>
        <thead>
          <tr>
            <td>Дата</td>
            <td>Действие</td>
            <td>Жираф</td>
            <td>Статус</td>
          </tr>
        </thead>
        <tbody>
          {updatesData.map((el, i) => {
            const statusBtn =
              el.status === "Ожидается"
                ? "blue"
                : el.status === "Выполнено"
                ? "green"
                : el.status === "Не подтвержден"
                ? "orange"
                : el.status === "Отклонено"
                ? "red"
                : "";
            return (
              <tr key={i}>
                <td style={{ width: "113px" }}>{el.date}</td>
                <td style={{ width: "127px" }}>{el.action}</td>
                <td style={{ width: "91px" }}>{el.name}</td>
                <td>
                  <button className={statusBtn}>{el.status}</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="closeBtn">
        <i className="fas fa-plus" />
      </button>
    </div>
  );
}
