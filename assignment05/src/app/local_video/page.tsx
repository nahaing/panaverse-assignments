
export default function LocalVideo(){
    return(
        <div>
            <h2>Local Video</h2>
            <video width="560" height="315" controls>
                <source src="../../media/video.mp4" type="video/mp4" />
                {/* Your browser does not support the video tag. */}
            </video>
        </div>
    )
}