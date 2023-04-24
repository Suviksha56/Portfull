import vd from './Video/project1.mp4'
export function Upload(){
    return(
        <div>
            <video controls autoplay heght={"800px"} width={"900px"} >
                <source src={vd} />
            </video>
        </div>
    )
}