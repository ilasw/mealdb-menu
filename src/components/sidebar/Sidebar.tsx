import React, {FC, FormEvent, useEffect, useState} from "react";
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.scss'

export const Sidebar: FC<SidebarProps> = (props) => {
  const [ingredient, setIngredient] = useState<string>("");
  const {search, categories, onClickCategory, ingredients, onSearchIngredient} = props;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearchIngredient(ingredient)
  }

  useEffect(() => setIngredient(''), [search?.value])

  return <aside className={styles.Sidebar}>

    <h2 className={styles.heading}>Trova piatti</h2>

    <h3 className={styles.heading}>Per ingrediente</h3>
    <form action="#"
          onSubmit={onSubmit}
          className={styles.form}
    >
      <label className={styles.label}>
        {/* todo: add react-hook-form for better code */}
        {/* todo: remove static ID if used in real world app */}
        <input className={styles.input}
               list="ingredients"
               name="ingredients"
               onChange={(e) => setIngredient(e.target.value)}
               value={ingredient}
        />
        <span className={styles.helper}>Seleziona dalla lista</span>
        <datalist id="ingredients">
          {ingredients.map(value => <option key={`o-${value}`} value={value}/>)}
        </datalist>
      </label>
      <button className={'btn btn-round'}
              disabled={!ingredient?.length}
      >Cerca</button>
    </form>

    <nav className={styles["nav"]}>
      <h3 className={styles.heading}>Per categoria</h3>

      <ul className={styles["menu"]}>
        {categories?.map(category => (
            <li key={category.idCategory}
                className={`${styles["menu-item"]} ${styles[search?.value === category.strCategory ? '--active' : '']}`}>
              <button className={styles.button}
                      onClick={() => onClickCategory(category.strCategory)}
              >
                <span className={styles["thumb"]}
                ><img src={category.strCategoryThumb}
                      alt={category.strCategory}
                /></span>
                <span className={styles["text"]}
                >{category.strCategory}</span>

              </button>
            </li>
        ))}
      </ul>
    </nav>
  </aside>
}

export default Sidebar;