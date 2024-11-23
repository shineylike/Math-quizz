class QuizModel {
    constructor(question, options, scores, totalScore, skillLevel, challengeLevel, explanation) {
        this.question = question;
        this.options = options;
        this.scores = scores;
        this.totalScore = totalScore;
        this.skillLevel = skillLevel;
        this.challengeLevel = challengeLevel;
        this.explanation = explanation;
    }

    getQuestion() {
        return this.question;
    }

    getOptions() {
        return this.options;
    }

    getExplanation() {
        return this.explanation;
    }

    calculateScore(selectedIndex) {
        return this.scores[selectedIndex] || 0;
    }
}

export default QuizModel;
