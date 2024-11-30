/*QuizModel.js*/
class QuizModel {
    constructor(question = '', options = [], scores = [], totalScore = 0, skillLevel = '', challengeLevel = '', explanation = '') {
        this.question = question;
        this.options = options;
        this.scores = scores;
        this.totalScore = totalScore;
        this.skillLevel = skillLevel;
        this.challengeLevel = challengeLevel;
        this.explanation = explanation;
    }

    calculateScore(selectedIndex) {
        return this.scores[selectedIndex] || 0;
    }
}

export default QuizModel;
