import React from "react";
import { ThemeButton, basic, dark, light } from "../../styled/Theme.styled";

export default function ThemeSwitcher(props) {
  return (
    <section className="themes">
      <p>THEME</p>
      <nav className="theme-toggle">
        <section className="theme-numbers">
          <section id="color-theme1" className="theme-number">
            1
          </section>
          <section id="color-theme2" className="theme-number">
            2
          </section>
          <section id="color-theme3" className="theme-number">
            3
          </section>
        </section>
        <section className="theme-value">
          <ThemeButton
            className="theme-btn basic active"
            onClick={(e) => props.handleChangeTheme(basic)}
          />
          <ThemeButton
            className="theme-btn light"
            onClick={(e) => props.handleChangeTheme(light)}
          />
          <ThemeButton
            className="theme-btn dark"
            onClick={(e) => props.handleChangeTheme(dark)}
          />
        </section>
      </nav>
    </section>
  );
}
