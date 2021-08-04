import {FC} from 'react'
import { SongCard } from "../SongCard"

interface Props{
    tracks:any
}

export const ListOfSongCard:FC<Props> = ({tracks}) => {
    return (
        <div>
            {tracks.map((track:any, idx:number) => {
                return <SongCard key={idx} {...track}/>
            })}
        </div>
    )
}
