export const Accordion = ({ title, text }) => {
	return (
		<div class={"accordion"}>
			<div class="accordion--button">
				<span class={"icon-ic-plus"}></span>
				<p class="accordion--button_text">{title}</p>
			</div>
			<div class="accordion--content">
				<div class="is_cascade">
					<p>
						{text}
						<a href="/">ccылка</a> {text}
					</p>
				</div>
			</div>
		</div>
	);
};
