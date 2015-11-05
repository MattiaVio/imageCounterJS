imageCounterJS
=============

How to start counting :
-------
0. To start counting click on the cell with 0, in the row with the "Specie" you want to count, under the column "Conteggio".
0. After you clicked the 0, of point 1., you can start clicking on the image and a red marker will be added for every click, also the count will increase.
0. When you want to stop the current Counting simply click on the button named "stop current count". If you want to resume the 0. Count just click on the cell with the count you want to resume (N.B.: once removed markers can't be reloaded).
0. When you want to remove all markers from the image (e.g. when you want to count next "Specie"), click on the Remove Markers button (N.B.: once removed they can't be reloaded) and then on the Stop Current Count button.
0. If you want you can have all markers active on the image (markers from different "Specie"). Click on the cell with the first specie and start clicking on the image. After don't click on Remove Markers, click on the next "Specie" count's cell and start clicking on the image. You will have both markers from all "Specie".
0. Clicking on another "Conteggio" cell will act same as "Stop Current Count" button.

How to temporarily add new "Specie" to the table:
-------
0. Insert the name of the new species in the text area near the button "Add new species".
0. Click the button "Add new species".
0. A row with the new "Specie" will be added at the last place in the table.
0. If you add a new "Specie" this way it will not be saved i n the "specie.xml" where there is the list of all "Specie" to create the table every time. You have to manually add it to the "specie.xml" to make it permanent.

How to permanently add new "Specie" to the table:
-------
0. Open the "lista_specie" directory.
0. Open with a text editor the file "specie.xml".
0. Copy/Paste an existing ling (e.g. <specie><name>test</name></specie> and, instead of the 'test', put the new specie's name in it.
0. This operation has to be done before the starting of counting process.

How to change Image to count in:
-------
0. Open the "immagini" directory.
0. Put the image you want to count in in the "immagini" directory and rename it as "image.jpg"
0. Now refresh the page and start to count on the new image.
0. N.B. : you can leave the image you have already processed in the "immagini" directory, just remember to rename it in something different from "image.jpg".

How To reset the count of a X "Specie":
-------
0. Insert the "Specie" name in the text area near the "Reset this count" button.
0. Press the "Reset this count" button to set the count of the selected "Specie" to 0.

How To remove last marker:
-------
0. Press the "Remove last marker" button.
0. The last marker will be removed.
0. The Count to whom the marker belong will decrease by 1 (until max of 0).
