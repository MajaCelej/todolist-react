import React from "react";
import Main from "../../common/Main";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
	<Main>
		<Header title="O autorze" />
		<Section
			title="Maja Celej"
			body={
				<>
					<p>
                        Moją pasją są psy. Mój mały ziomek nazywa się <strong>Cymbałek</strong>. Wspólnie trenujemy i jeździmy na wycieczki.
                    </p>
					<p>
                        Dodatkowo dużo czasu spędzam na siłowni i basenie. Uczę się już 3 języka - włoskiego. Lubię się rozwijać i próbować nowych rzeczy dlatego zaczęłam też inwestować na giełdzie.                   </p>
				</>
			}
		/>
	</Main>
);
