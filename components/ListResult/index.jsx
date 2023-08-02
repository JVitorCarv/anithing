import { useEffect, useState } from 'react'
import { AnimeContainer, FrameVideo, ImgContainer, ListResultContainer, ListResultOverlay, VideoContainer } from './styles'

const ListResult = ({data}) => {
    const [open, setOpen] = useState()

    const coverQuery = `
    query ($id: Int, $page: Int) {
        Page(page: $page) {
          media(id: $id) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
          }
        }
      }
      `
    
    const [mediaCover, setMediaCover] = useState()
    const fetchData = async () => {
        console.log("fetch")
        var variables = {
            id: data.anilist.id,
        };
        
        var url = 'https://graphql.anilist.co',
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: coverQuery,
                    variables: variables
                })
            };
        
        const response = await fetch(url, options)
        const responseJson = await response.json()
        setMediaCover(responseJson.data.Page.media[0].coverImage.large)
    }

    const convertToDate = (num) => {
        return new Date(num * 1000).toISOString().slice(11, 19);
    }
    
    useEffect(() => {
        fetchData()
    }, [open])

    return (
        <>
            <ListResultContainer onClick={() => setOpen(!open)}>
                {data.anilist.title.romaji}
                <ListResultOverlay>
                    {(data.similarity * 100).toFixed(1)}%
                </ListResultOverlay>
            </ListResultContainer>
            {open && (<AnimeContainer>
                <VideoContainer>
                    <FrameVideo autoPlay={true} muted loop controls>
                        <source src={data.video} type="video/mp4"/>
                    </FrameVideo>
                </VideoContainer>
                Episode {data.episode} from {convertToDate(data.from)} to {convertToDate(data.to)}
                <a href={`https://anilist.co/anime/${data.anilist.id}`} target="_blank" rel="noreferrer">
                    <ImgContainer src={mediaCover}/>
                </a>

            </AnimeContainer>)}
        </>
    )
}

export default ListResult