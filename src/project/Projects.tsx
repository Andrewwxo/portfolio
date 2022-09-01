import React from 'react';
import style from './Projects.module.css';
import {Project} from './Project/Project';
import styleContainer from '../common/styles/Container.module.css';

export function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'TodoList'} description={'Project description'}/>
                    <Project title={'Social Network'} description={'Project description'}/>
                </div>

            </div>
        </div>
    )
}
