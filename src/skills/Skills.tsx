import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'About fafasfsafasfasfa fsasfasf fas as f fasfasf af ffffasffdsd  asffd da df'}/>
                    <Skill title={'CSS'} description={'About About fafasfsafasfasfa fsasfasf fas as f fasfasf af ffffasffdsd  asffd da df'}/>
                    <Skill title={'React'} description={'About About fafasfsafasfasfa fsasfasf fas as f fasfasf af ffffasffdsd  asffd da df'}/>
                </div>

            </div>
        </div>
    )
}
