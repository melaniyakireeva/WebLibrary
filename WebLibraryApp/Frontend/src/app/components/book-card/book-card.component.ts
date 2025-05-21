import { Component, inject, OnInit } from '@angular/core';
import {
  TuiButton,
  TuiDialogContext,
  TuiIcon,
  TuiTextfield,
} from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiAvatar, TuiTooltip } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookDto } from '../../services/book/book.service';
import { FileWorkerService } from '../../services/fileworker/file-worker.service';
import { FilesUploaderService } from '../../services/files/files-uploader.service';
import _, { tap } from 'lodash';
import { map } from 'rxjs';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiIcon,
    TuiTooltip,
    TuiButton,
    TuiAvatar,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent implements OnInit {
  private fileService: FilesUploaderService = inject(FilesUploaderService);

  public readonly context =
    injectContext<TuiDialogContext<void, { bookInfo: BookDto }>>();

  sourceFile: string | null = null;

  ngOnInit(): void {
    if (!_.isNil(this.context.data.bookInfo.fileId)){
      this.fileService.getFile(this.context.data.bookInfo.fileId).subscribe(x => {
        this.sourceFile = `data:image/png;base64, ${x.fileData}`;
      });
    }
  }
}
