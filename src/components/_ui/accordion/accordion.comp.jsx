export const Accordion = ({ title, text }) => {
	return (
		<div class={"accordion"}>
			<div class="accordion--button">
				<p class="accordion--button_text">{title}</p>
				<span class={"icon-ic-plus"}></span>
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
