export default function Youtube(){
    return(
        <div>
            <h2>YouTube Video</h2>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/2V0Hl9C2hcM?si=SRKLZVP0Uvz25xOc" 
                title="YouTube video player" 
                // frameborder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                // allowfullscreen
                ></iframe>
        </div>
    )
}