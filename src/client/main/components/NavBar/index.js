import React from "react";
import "./style.css";
import NavButton from "../NavButton";

const buttonTitles = [
  { icon: "fas fa-home ", title: "Главная" },
  { icon: "fas fa-tasks", title: "Управление" },
  { icon: "fas fa-horse-head", title: "Жирафы" },
  { icon: "fas fa-user-friends", title: "Сотрудники" },
  { icon: "fas fa-cog", title: "Настройки" },
  { icon: "fas fa-tools", title: "Поддержка" },
];
export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="Жираф лого 1.png" alt="logo" />
        <div className="title">
          <p>Ферма Заслуженных Жирафов </p>
          <span>России и СНГ</span>
        </div>
      </div>
      {buttonTitles.map((button) => {
        return <NavButton button={button} key={button.title} />;
      })}
    </div>
  );
}
