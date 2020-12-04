var input = document.querySelector('.inputValue');
var btn = document.querySelector('.buton');
var info = document.querySelector('.information');
let output = '';
var result = document.querySelector('.rslt');
 

btn.addEventListener('click',loud);

  function loud (){
	 output='';
	 result.innerHTML = '';

	fetch('https://api.themoviedb.org/3/search/movie?api_key=f523881edc8aa02fdd93a75595a43c58&language=en-US&query='+input.value+' &page=1&include_adult=false')
			.then(response => {
				return response.json();
			})
			.then(data =>{ 
				result.innerHTML = data.results.length + ' RESULT MATCHING YOUR SEARCH';
				   input.value ='';
						  var ans = data.results;
						
						ans.forEach(element => {
							if(element.poster_path == null){
                                  return;
							}
							 output += `
											<div class="individual-block col-lg-4 col-md-6 col-sm-12 my-4">
													 
													<div class=" box faded" style="display:flex; flex-direction:row; background-image: url('https://image.tmdb.org/t/p/w500${element.poster_path}'); background-position: center center; background-size: cover;  background-repeat: no-repeat; "></div>

															<div style="display:flex; flex-direction:column; text-align:center;  color:white; "  class="box text">
																  <div class="row">
																	 <div class="col-sm-12 my-3">
																		<h4 class="title" style="font-weight: bold;">${element.original_title}</h4>
																		<h5 class="rating">Rating: ${element.vote_average}/10</h5>
																		<h6 class="release-date">Release date : ${ element.release_date}</h6>
																	</div>
																	<div class="col-sm-12">
																	   <p class="overview">${element.overview}</p>
																	</div>
																</div>
													       </div>
											</div> 
											`;
						       	});
						 	info.innerHTML = output;

			})
			.catch(err => {
				console.log(err);
			})
		}

		