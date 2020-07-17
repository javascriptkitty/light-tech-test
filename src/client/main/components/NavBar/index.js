import React from "react";
import "./style.scss";
import NavButton from "../NavButton";
import logo from "../../../../../public/img/logo.png";

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
        <img src={logo} alt="logo" />
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
