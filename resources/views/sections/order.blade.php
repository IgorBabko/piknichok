<section class="order">
    <div class="countdown-wrapper">
        <div class="container">
            {{-- <h2>Заказ</h2> --}}
            <h2>Эксклюзивное предложением</h2>
            {{-- <p class="message">Не упустите шанс воспользоваться нашим специальным предложением</p> --}}
            <div class="countdown"></div>
            <div class="col-xs-12 price-block">
                <span style="text-decoration: line-through" class="price">1100 грн</span>
                <img src="/img/icons/discount_main.png" class="discount-icon">
                <span class="price price--new">899 грн</span>
            </div>
            <form action="/order" method="POST" class="order-form">
                {{ csrf_field() }}
                <div> 
                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                    <input type="text" name="phone" id="phone" placeholder="мобильный телефон">
                </div>
                <div>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <input type="email" name="email" id="email" placeholder="электронная почта">
                </div>
                <br>
                <button type="submit">Заказать</button>
            </form>
        </div>
    </div>
</section>