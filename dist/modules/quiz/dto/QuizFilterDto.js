'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class QuizFilterDto {
    constructor(pageOptionsDto) {
        if (pageOptionsDto.author_id) {
            this.author_id = pageOptionsDto.author_id;
            this.author = { id: this.author_id };
        }
        if (pageOptionsDto.author) {
            this.author = pageOptionsDto.author;
        }
        if (pageOptionsDto.ispublished) {
            this.ispublished = pageOptionsDto.ispublished;
        }
    }
}
exports.QuizFilterDto = QuizFilterDto;
//# sourceMappingURL=QuizFilterDto.js.map