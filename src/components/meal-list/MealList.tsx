import React, {FC} from "react";
import styles from './MealList.module.scss'
import {MealListProps} from "./MealList.props";
import MealListItem from "./MealListItem";

export const MealList: FC<MealListProps> = (props) => {
  const {meals = [], heading, layout} = props;

  return <div className={`${styles.MealList} ${styles['--layout-' + layout] ?? ''}`}>
    {!!heading?.length && (
        <h2 className={styles.heading}>{heading}</h2>
    )}
    <div className={styles.grid}>
      {meals?.map((meal) => (
          <MealListItem key={meal.idMeal}
                        meal={meal}/>
      ))}
    </div>
  </div>
}

export default MealList;