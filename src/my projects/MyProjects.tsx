import React from 'react';
import s from './MyProjects.module.scss'
import stylesContainer from './../common/styles/Container.module.css'
import Project from './project/Project';
import {Title} from '../common/components/title/Title';
import DividerSpace from '../common/components/dividerSpace/DividerSpace';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {projects} from "./data";

const MyProjects = () => {
    return (
        <div id={'projects'} className={s.myProjects}>
            <Fade top>
                <div className={`${stylesContainer.container} ${s.projectContainer}`}>
                    <div className={s.title}>
                        <Title title={'Projects i worked on'}/>
                    </div>
                    <div className={s.projects}>
                        <Project projects={projects}/>
                    </div>
                </div>
                <DividerSpace/>
            </Fade>
        </div>

    );
};

export default MyProjects;
