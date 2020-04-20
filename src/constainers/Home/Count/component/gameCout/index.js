import React ,{ memo } from 'react';
import { GameCountStyle } from './style';
import List from './list';
import config from '../../../../../config';
import img from '../../../../../static/images/game_3.png'
const gameName = (gameId) => {
    return config.gameName[gameId]
}
const GameCount = memo(function GameCount(props) {
    return (
        <GameCountStyle>
            {
                props.records.length ? props.records.map((value, index) => {
                    return (
                        <List
                            key={index}
                            gameName={gameName(value.GameId)}
                            url={img}
                            onlineNum={value.PlayerCount}
                            tableNum={value.TableCount}
                            createNum={value.Count}
                        />
                    )
                }) : <List
                        key={0}
                        gameName={gameName(3)}
                        url={img}
                        onlineNum={0}
                        tableNum={0}
                        createNum={0}
                    />
            }

        </GameCountStyle>
    )
})

export default GameCount;