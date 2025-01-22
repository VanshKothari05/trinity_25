import React from 'react';

export default function YtFrame1() {
    return (
        <div className='yt-frames-container-iframe'>
            <iframe 
                src="https://www.youtube.com/embed/VQq2zKQ9caE" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
            <h6>IDPT Theme Unveiling</h6>
        </div>
    );
}
