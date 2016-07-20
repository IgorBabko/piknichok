<section class="email parallax-window">
    <div class="email-overlay"></div>
    <div class="container">
        <h2 style="font-size: 48px">Свяжитесь с нами</h2>
        <div class="row">
            <form action="/email" method="POST" class="email-form">
                {{ csrf_field() }}
                <div class="col-md-6">
                    <input type="text" class="input-field" name="name" placeholder="имя">
                </div>
                <div class="col-md-6">
                    <input type="email" class="input-field" name="email" placeholder="email">
                </div>
                <div class="col-xs-12">
                    <textarea class="textarea" name="message" placeholder="содержимое"></textarea>
                </div>
                <div class="col-xs-12">
                    <button>Отправить</button>
                </div>
            </form>
        </div> 
    </div>
</section>
