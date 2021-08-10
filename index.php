<?php include('header.php'); ?>
<div class="pagecont">
    <section class="slidersec wow fadeIn">
        <div class="mainslider">
            <? for($i=0;$i<3;$i++): ?>
            <div class="item">
                <div class="banner" style="background-image:url('assets/img/pic-banner.png')">
                    <div class="content wow animated fadeIn">
                        <div class="container">
                            <h2 class="title-banner">標題</h2>

                            <div class="deco-line-wrap mb-4">
                                <div class="deco-line"></div>
                                <h3 class="subtitle-banner mb-0">副標題</h3>
                                <div class="deco-line"></div>
                            </div>

                            <a href="category.php" class="btn btn-white stretched-link">了解更多</a>
                        </div>
                    </div>
                </div>
            </div>
            <? endfor; ?>
        </div>
    </section>
    <section>
        <div class="container">
            <h2 class="title-sec">關於我們</h2>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime labore suscipit dolor ipsa pariatur blanditiis possimus eius earum optio ullam culpa voluptatibus,
                cupiditate facilis autem nisi reprehenderit dignissimos ad quisquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia impedit deleniti facere consequuntur
                dolorum animi? Aperiam, asperiores, nam beatae voluptatibus autem ut aliquam deserunt provident accusantium amet sapiente facere.</p>
        </div>
    </section>
    <section class="bg-light">
        <div class="container">
            <h2 class="title-sec text-center">
                我們的服務
            </h2>
            <div class="slider-col-3">
                <? for($i=0;$i<6;$i++): ?>
                <div class="item">
                    <div class="card border-0">
                        <div class="box-img r-16-9" style="background-image:url('assets/img/demo-news.png')"></div>
                        <div class="card-body">
                            <h4 class="title-card"><a href="#" class="stretched-link">Title</a></h4>
                            <p class="txt-l2 mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, nostrum reprehenderit! Ipsa nam voluptates magnam quo repudiandae, asperiores, minima
                                porro corporis tempora ab in dolore quos beatae aliquid mollitia esse?</p>
                        </div>
                    </div>
                </div>
                <? endfor; ?>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-3 d-flex">
                    <div class="box-img img-fit-text h-100 w-100" style="background-image:url('assets/img/pic-banner.png')"></div>
                </div>
                <div class="col-md-6 mb-3">
                    <h2 class="title-sec">Title</h2>
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt unde est ratione. Aliquam, doloribus expedita omnis sit voluptatem, vel adipisci, corporis nisi quam beatae
                            doloremque perferendis! Soluta possimus atque sunt?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt unde est ratione. Aliquam, doloribus expedita omnis sit voluptatem, vel adipisci, corporis nisi quam beatae
                            doloremque perferendis! Soluta possimus atque sunt?</p>
                        <a href="#" class="btn btn-main">Read More</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3 d-flex order-md-2">
                    <div class="box-img img-fit-text h-100 w-100" style="background-image:url('assets/img/pic-banner.png')"></div>
                </div>
                <div class="col-md-6 mb-3">
                    <h2 class="title-sec">Title</h2>
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt unde est ratione. Aliquam, doloribus expedita omnis sit voluptatem, vel adipisci, corporis nisi quam beatae
                            doloremque perferendis! Soluta possimus atque sunt?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt unde est ratione. Aliquam, doloribus expedita omnis sit voluptatem, vel adipisci, corporis nisi quam beatae
                            doloremque perferendis! Soluta possimus atque sunt?</p>
                        <a href="#" class="btn btn-main">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<?php include('footer.php'); ?>