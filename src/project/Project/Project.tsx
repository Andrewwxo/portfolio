import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
            <div>
                <a className={style.button}>Посмотреть</a>
            </div>
            <div className={style.description}>
                <h3>{props.title}</h3>
                <span>
                {props.description}
            </span>
            </div>

        </div>
    )
}