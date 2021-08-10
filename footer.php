


<script src="assets/js/jquery-3.4.1.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/jquery.slick-1.9.0.min.js"></script>
<script src="assets/js/wow.min.js"></script>
<script src="assets/js/jquery.magnificpopup-1.1.0.min.js"></script>
<script src="assets/js/waves-0.7.6.min.js"></script>
<script src="assets/js/lodash.min.js"></script>
<script src="assets/js/vue.js"></script>
<script src="assets/js/common.js?t=<?=time()?>"></script>
<script src="assets/js/classyNav.js"></script>
<script src="assets/js/ace-responsive-menu.js"></script> 
<script>
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                    console.log(lazyImage.id);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {}
});
</script>
</body>

</html>