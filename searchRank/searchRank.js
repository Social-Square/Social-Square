			var ff;
			$.ajax( { url:'http://www.blastcasta.com/feed-to-json.aspx?feedurl=http%3A%2F%2Fopenapi.naver.com%2Fsearch%3Fkey%3D482e56d2ddc93746d8668a78563714f9%26query%3Dnexearch%26target%3Drank&param=dd&callback=?', dataType: "JSON", complete: function(){ ff = dd; disp(); } } );
			function disp(){
			
				R = ff.result.item[ 0 ];
				$('#divsearchRank').html($('#divsearchRank').html()+"<div style='position:absolute;width:80%;font-family:NanumGothicWeb;height:70%;left:5%;top:5%;'><img src='searchRank/numbers/1.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R1[ 0 ].K +"' target='_blank'>"+R.R1[0].K+"</a><br><img src='searchRank/numbers/2.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R2[ 0 ].K +"' target='_blank'>"+R.R2[0].K+"</a><br><img src='searchRank/numbers/3.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R3[ 0 ].K +"' target='_blank'>"+R.R3[0].K+"</a><br><img src='searchRank/numbers/4.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R4[ 0 ].K +"' target='_blank'>"+R.R4[0].K+"</a><br><img src='searchRank/numbers/5.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R5[ 0 ].K +"' target='_blank'>"+R.R5[0].K+"</a><br><img src='searchRank/numbers/6.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R6[ 0 ].K +"' target='_blank'>"+R.R6[0].K+"</a><br><img src='searchRank/numbers/7.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R7[ 0 ].K +"' target='_blank'>"+R.R7[0].K+"</a><br><img src='searchRank/numbers/8.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R8[ 0 ].K +"' target='_blank'>"+R.R8[0].K+"</a><br><img src='searchRank/numbers/9.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R9[ 0 ].K +"' target='_blank'>"+R.R9[0].K+"</a><br><img src='searchRank/numbers/10.png' width=10px height=15px>&nbsp<a href ='http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query="+R.R10[ 0 ].K +"' target='_blank'>"+R.R10[0].K+"</a><br></div>");
			}

