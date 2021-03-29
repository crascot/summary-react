import React from 'react';
import style from './info.module.css';


function Info() {
    return (
        <div className={ style.info }>
            <h1>Ситдиков Ярослав</h1>
            <p>Я могу легко влиться в коллектив и связанно работать в команде.
            Давно интересовался IT-индустрией, но всерьез начал обучаться этому в 2018 году.
            Пробовал разные специальности но больше всего получилось развить Frontend.
        </p>
            <div className={ style.links }>
                <a href="https://t.me/crascot">Telegram</a>
                <a href="https://join.skype.com/invite/jw2FSUrQojO5">Skype</a>
                <a href="https://github.com/crascot">Github</a>
                <a href="https://gist.github.com/crascot">Github Gist</a>
                <a href="summary.pdf" target='_blank'>PDF-файл</a>
            </div>
        </div>
    )
}

export default Info;