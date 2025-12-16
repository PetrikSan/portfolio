// Video autoplay on scroll using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Video must be 50% visible to trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                // Video is in viewport - play it
                video.play().catch(error => {
                    console.log('Autoplay prevented:', error);
                });
            } else {
                // Video is out of viewport - pause it
                video.pause();
            }
        });
    }, observerOptions);

    // Observe all videos
    videos.forEach(video => {
        observer.observe(video);
    });
});
