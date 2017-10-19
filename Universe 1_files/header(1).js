var html = '';
html += '<nav id="glovalnavi">';
html += '<p class="close sp"><img src="/tv/dragon_s/assets/img/common/sp_menu/btn_close.png" width="100%" alt=""></p>';
html += '<p class="logo sp"><img src="/tv/dragon_s/assets/img/common/logo.png" width="100%"></p>';
html += '<div class="navwrap">';
html += '<ul>';
html += '<li class="top"><a href="/tv/dragon_s/"></a></li>';
html += '<li class="news"><a href="/tv/dragon_s/news/"></a></li>';
html += '<li class="about"><a href="/tv/dragon_s/about/"></a>';
html += '</li>';
html += '<div class="submenu sp about_sub">';
html += '<p><a href="/tv/dragon_s/about/">イントロダクション</a></p>';
html += '<p><a href="/tv/dragon_s/about/staffcast.html">スタッフ・キャスト</a></p>';
html += '<p><a href="/tv/dragon_s/about/song.html">主題歌</a></p>';
html += '<p><a href="/tv/dragon_s/about/comics.html">コミックス</a></p>';
html += '</div>';
html += '<li class="chara"><a href="/tv/dragon_s/chara/chapter4/"></a></li>';

html += '<div class="submenu sp chara_sub">';
html += '<p><a href="/tv/dragon_s/chara/">キャラクター一覧</a></p>';
html += '<p><a href="/tv/dragon_s/chara/chapter4/">宇宙サバイバル編</a></p>';
html += '</div>';

html += '<li class="story"><a href="/tv/dragon_s/episode/summary/"></a></li>';
html += '<div class="submenu sp story_sub">';
html += '<p><a href="/tv/dragon_s/episode/summary/">最新話</a></p>';
html += '<p><a href="/tv/dragon_s/episode/list/">あらすじ一覧</a></p>';
html += '</div>';

html += '<li class="goods"><a href="/tv/dragon_s/goods/"></a></li>';

html += '<div class="submenu sp goods_sub">';
html += '<p><a href="/tv/dragon_s/goods/goods.html">グッズ</a></p>';
html += '<p><a href="/tv/dragon_s/goods/cd.html">CD</a></p>';
html += '<p><a href="/tv/dragon_s/goods/">DVD&Blu-ray</a></p>';
html += '</div>';

html += '<li class="special"><a href="/tv/dragon_s/special/"></a></li>';

html += '</ul>';
html += '<p class="line"></p>';
html += '<p class="current"></p>';
html += '</div>';

html += '<div class="submenu pc about">';
html += '<div class="wrap clearfix">';
html += '<p><a href="/tv/dragon_s/about/">イントロダクション</a></p>';
html += '<p><a href="/tv/dragon_s/about/staffcast.html">スタッフ・キャスト</a></p>';
html += '<p><a href="/tv/dragon_s/about/song.html">主題歌</a></p>';
html += '<p><a href="/tv/dragon_s/about/comics.html">コミックス</a></p>';
html += '</div>';
html += '</div>';

html += '<div class="submenu pc chara" style="padding-left:320px;">';
html += '<div class="wrap clearfix">';
html += '<p><a href="/tv/dragon_s/chara/">キャラクター一覧</a></p>';
html += '<p><a href="/tv/dragon_s/chara/chapter4/">宇宙サバイバル編</a></p>';
html += '</div>';
html += '</div>';

html += '<div class="submenu pc story" style="padding-left:380px;">';
html += '<div class="wrap clearfix">';
html += '<p><a href="/tv/dragon_s/episode/list/">あらすじ一覧</a></p>';
html += '<p><a href="/tv/dragon_s/episode/summary/">最新話</a></p>';
html += '</div>';
html += '</div>';

html += '<div class="submenu pc goods" style="padding-left:470px;">';
html += '<div class="wrap clearfix">';
html += '<p><a href="/tv/dragon_s/goods/goods.html">グッズ</a></p>';
html += '<p><a href="/tv/dragon_s/goods/cd.html">CD</a></p>';
html += '<p><a href="/tv/dragon_s/goods/">DVD&amp;Blu-ray</a></p>';
html += '</div>';
html += '</div>';

html += '<div class="sns">';
html += '<ul class="clearfix">';
html += '<li class="fb"><div class="fb-like" data-href="http://www.toei-anim.co.jp/tv/dragon_s/" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div></li>';
html += '<li class="tw"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.toei-anim.co.jp/tv/dragon_s/">Tweet</a>';
html += '</ul>';
html += '</div>';

html += '</nav>';

document.write(html);