import * as React from "react";
import ClubUpperImage from "../assets/pictures/ClubUpperImage.svg"
import { useLocation, Link } from 'react-router-dom';


export default function SingleClub({ club }) {

	const location = useLocation();

	const expand = () => {


		document.getElementById(`less${club._id}`).classList.add("hidden");
		document.getElementById(`more${club._id}`).classList.remove("hidden");
	};

	const contract = () => {
		document.getElementById(`more${club._id}`).classList.add("hidden");
		document.getElementById(`less${club._id}`).classList.remove("hidden");
	};

	return (
		<div className="card clubCard">
			<img
				className="card-img-top club-img"
				src={ClubUpperImage}
				alt={`${club.name} `}
			/>
			<div className="card-body text-center">
				<h3 className="card-title">{club.name} </h3>
				<div className="club-info mt-3">
					<p>{club.email}</p>
					<p style={{ lineHeight: 1 }}>{club.address}</p>
				</div>

				<div id={`less${club._id}`} className="desc">
					{club.description.length > 80
						? club.description.slice(0, 80) + "..."
						: club.description}
					{club.description.length > 80 ? (
						<span className="seeBtn" onClick={expand}>
							See more
						</span>
					) : (
						""
					)}


				</div>
				<div id={`more${club._id}`} className="hidden desc">
					{club.description}
					<span className="seeBtn" onClick={contract}>
						See less
					</span>
				</div>

				{location.pathname === "/donateus" &&

					<>

						<button type="button" className="btn btn-warning donate_btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { console.log(club.name) }}  >
							Donate
						</button>



						<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="staticBackdropLabel">Select any amount that you would donate ! </h5>

										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										<p>All of the money you donate, goes directly to the club</p>

										<div className="modal-body_amountdiv">
											<h5>$</h5>
											<input type="number" name="donateamount" id="donateamount" />
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button>

										<button type="button" class="btn btn-warning" data-bs-dismiss="modal"> Donate </button>

									</div>
								</div>
							</div>
						</div>




					</>

				}






			</div>

		</div>
	);
}
