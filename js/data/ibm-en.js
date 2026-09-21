export const ibmEn = {
  "heroBadge": "IBM Professional Curriculum",
  "heroTitle": "IBM AI Engineering Professional Certificate (13 Courses)",
  "heroSubtitle": "Official 13-Course Specialization Syllabus & Core Concepts Overview with Prerequisites & Capstones",
  "pdfBtnText": "Export PDF",
  "trackLabel": "Select Track:",
  "projectBtnText": "Stage Projects & Hands-on Deliverables",
  "projectNote": "Note: Project execution hours are independent and NOT included within course estimates.",
  "bannerImg": "./assets/images/IBM_Roadmap.png",
  "specialization": {
    "title": "Direct Full Professional Certificate Link on Coursera:",
    "url": "https://www.coursera.org/professional-certificates/ai-engineer"
  },
  "stages": [
    {
      "id": "ibm-step-0",
      "title": "0. Python for Data Science (Prerequisite)",
      "badge": "Prerequisite",
      "duration": "Foundational",
      "items": [
        {
          "label": "Source & Links",
          "text": "Kaggle Learn (<a href='https://www.kaggle.com/learn/python' target='_blank'>Python</a> | <a href='https://www.kaggle.com/learn/pandas' target='_blank'>Pandas</a> | <a href='https://www.kaggle.com/learn/data-visualization' target='_blank'>Visualization</a> | <a href='https://www.kaggle.com/learn/data-cleaning' target='_blank'>Cleaning</a>) & NumPy Documentation."
        },
        {
          "label": "Main Tool",
          "text": "Python, NumPy, Pandas, Matplotlib, Seaborn."
        },
        {
          "label": "Core Modules",
          "text": "Advanced Python structures, NumPy vectorization, Pandas DataFrame manipulation, and visualization."
        },
        {
          "label": "Output",
          "text": "Solid programmatic readiness for loading, cleaning, and preparing data for ML/DL pipelines."
        }
      ],
      "project": {
        "title": "Stage 0 — Exploratory Data Analysis (EDA)",
        "task": "Select a real-world tabular dataset, inspect data schema, handle missing values and duplicates, and derive insights backed by clean charts.",
        "source": "Kaggle Datasets (Suggested: <a href='https://www.kaggle.com/datasets/spscientist/students-performance-in-exams' target='_blank'>Students Performance in Exams</a>).",
        "deliverable": "Jupyter Notebook covering data cleaning, EDA plots, and summarized findings (no predictive modeling at this stage)."
      }
    },
    {
      "id": "ibm-step-1",
      "title": "1. Machine Learning with Python",
      "badge": "Course 1 / 13",
      "duration": "20 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/learn/machine-learning-with-python' target='_blank'>https://www.coursera.org/learn/machine-learning-with-python</a>"
        },
        {
          "label": "Main Tool",
          "text": "Scikit-learn, SciPy, Pandas, NumPy."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Supervised vs. Unsupervised Learning fundamentals.<br>• Regression: Simple, Multiple & Non-linear Regression, Model Evaluation (MSE, R²).<br>• Classification: KNN, Decision Trees, Logistic Regression, Support Vector Machines (SVM).<br>• Clustering: k-Means, Hierarchical Clustering, DBSCAN.<br>• Recommender Systems: Content-based & Collaborative Filtering."
        },
        {
          "label": "Output",
          "text": "Build, evaluate, and fine-tune classical supervised and unsupervised ML models and recommendation engines."
        }
      ],
      "project": {
        "title": "Stage 1 — Tabular Machine Learning Pipeline",
        "task": "<strong>Main Project:</strong> Predict passenger survival on <a href='https://www.kaggle.com/c/titanic' target='_blank'>Titanic: Machine Learning from Disaster</a> using Scikit-learn pipelines.<br><br><strong>Additional Project:</strong> Predict housing valuations on <a href='https://www.kaggle.com/c/house-prices-advanced-regression-techniques' target='_blank'>House Prices: Advanced Regression Techniques</a>.",
        "source": "Kaggle Competitions (Titanic & House Prices)",
        "deliverable": "End-to-end ML notebook with preprocessing, cross-validation, and submission-ready prediction file."
      }
    },
    {
      "id": "ibm-step-2",
      "title": "2. Introduction to Deep Learning & Neural Networks with Keras",
      "badge": "Course 2 / 13",
      "duration": "10 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/learn/introduction-to-deep-learning-with-keras' target='_blank'>https://www.coursera.org/learn/introduction-to-deep-learning-with-keras</a>"
        },
        {
          "label": "Main Tool",
          "text": "Keras, TensorFlow, Python."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Foundations of Deep Learning & Artificial Neurons.<br>• Activation Functions (ReLU, Sigmoid, Softmax) & Forward Propagation.<br>• Backpropagation & Gradient Descent optimization.<br>• Building and compiling Sequential Neural Networks using Keras.<br>• Architectural overview: CNNs, RNNs & Autoencoders."
        },
        {
          "label": "Output",
          "text": "Construct and compile multi-layer artificial neural networks from scratch using high-level Keras APIs."
        }
      ],
      "project": {
        "title": "Stage 2 — Neural Networks with Keras",
        "task": "Train a Multi-Layer Perceptron (MLP) on the exact same Titanic dataset used in Stage 1 and compare the neural network benchmark against classical ML algorithms.",
        "source": "Kaggle Titanic Dataset",
        "deliverable": "Working Keras notebook with comparative metric evaluation against Scikit-learn baselines."
      }
    },
    {
      "id": "ibm-step-3",
      "title": "3. Deep Learning with Keras and TensorFlow",
      "badge": "Course 3 / 13",
      "duration": "23 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>"
        },
        {
          "label": "Main Tool",
          "text": "TensorFlow 2.x, Keras, TensorBoard."
        },
        {
          "label": "Core Modules",
          "text": "<br>• TensorFlow computational graphs, low-level operations & Keras integration.<br>• Convolutional Neural Networks (CNNs): Feature extraction, Convolution & Pooling layers.<br>• Recurrent Neural Networks (RNNs) & LSTMs for time series and NLP.<br>• Unsupervised architectures: Autoencoders & Restricted Boltzmann Machines (RBMs)."
        },
        {
          "label": "Output",
          "text": "Design CNN computer vision pipelines, sequential RNN/LSTM architectures, and unsupervised autoencoders."
        }
      ],
      "project": {
        "title": "Stage 3 — CNN Image Classification with TensorFlow",
        "task": "Train a Convolutional Neural Network (CNN) to classify dogs vs cats, perform error analysis on misclassified samples, and test inference on unseen external images.",
        "source": "Dataset: <a href='https://www.kaggle.com/datasets/tongdn/cat-and-dog' target='_blank'>Cats and Dogs Image Classification</a>.",
        "deliverable": "CNN training pipeline notebook, confusion matrix, error breakdown, and single-image testing."
      }
    },
    {
      "id": "ibm-step-4",
      "title": "4. Introduction to Neural Networks and PyTorch",
      "badge": "Course 4 / 13",
      "duration": "19 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>"
        },
        {
          "label": "Main Tool",
          "text": "PyTorch (torch, torch.nn, torch.optim, Autograd)."
        },
        {
          "label": "Core Modules",
          "text": "<br>• PyTorch Tensors manipulation & Automatic Differentiation (Autograd).<br>• Implementing Linear and Logistic Regression from scratch in PyTorch.<br>• Deep Neural Network (DNN) architectures with torch.nn.<br>• Loss functions, optimization routines (torch.optim), and Regularization (Dropout)."
        },
        {
          "label": "Output",
          "text": "Master dynamic tensor manipulation, automatic differentiation, and build custom PyTorch deep neural networks."
        }
      ],
      "project": {
        "title": "Stage 4 — PyTorch Custom Neural Network Implementation",
        "task": "Re-implement the Titanic neural network in native PyTorch using custom Dataset, DataLoader, and explicit training/validation loops.",
        "source": "Titanic Competition Dataset",
        "deliverable": "PyTorch code implementation with a short write-up comparing Keras vs. PyTorch mechanics."
      }
    },
    {
      "id": "ibm-step-5",
      "title": "5. Deep Learning with PyTorch",
      "badge": "Course 5 / 13",
      "duration": "21 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/learn/deep-neural-networks-with-pytorch' target='_blank'>https://www.coursera.org/learn/deep-neural-networks-with-pytorch</a>"
        },
        {
          "label": "Main Tool",
          "text": "PyTorch, torchvision, CUDA / GPU."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Advanced Computer Vision pipelines with CNNs & torchvision.<br>• Transfer Learning & fine-tuning pre-trained models (ResNet, VGG).<br>• Sequential modeling with PyTorch LSTMs & GRUs.<br>• Model evaluation, checkpointing, saving, and deployment best practices."
        },
        {
          "label": "Output",
          "text": "Apply Transfer Learning using state-of-the-art vision models, custom DataLoaders, and model checkpointing."
        }
      ],
      "project": {
        "title": "Stage 5 — PyTorch Vision Transfer Learning",
        "task": "Using the Cats & Dogs dataset, benchmark: 1) Scratch CNN, 2) Feature extraction Transfer Learning with frozen weights, 3) Fine-tuning.",
        "source": "Cats & Dogs Image Dataset",
        "deliverable": "Comparative performance report, checkpoint saving, and sample image evaluation."
      }
    },
    {
      "id": "ibm-step-6",
      "title": "6. AI Capstone Project with Deep Learning",
      "badge": "Course 6 / 13",
      "duration": "15 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/learn/ai-capstone-project-with-deep-learning' target='_blank'>https://www.coursera.org/learn/ai-capstone-project-with-deep-learning</a>"
        },
        {
          "label": "Main Tool",
          "text": "PyTorch / Keras, ResNet-18, Computer Vision Pipeline."
        },
        {
          "label": "Core Modules",
          "text": "<br>• End-to-End deep learning pipeline: Concrete Crack Detection & Classification.<br>• Large-scale image data preprocessing, transformation, and augmentation.<br>• Training custom CNNs vs. Pre-trained ResNet-18 architectures.<br>• Rigorous metric evaluation (Precision, Recall, ROC-AUC) & final project reporting."
        },
        {
          "label": "Output",
          "text": "Deliver an end-to-end computer vision capstone project classifying concrete cracks with full performance reporting."
        }
      ],
      "project": {
        "title": "Stage 6 — Computer Vision Capstone Project",
        "task": "Train a robust vision classifier on a novel domain to prove generalization ability (Baseline $\\rightarrow$ CNN $\\rightarrow$ Transfer Learning).",
        "source": "Kaggle Dataset (Suggested: <a href='https://www.kaggle.com/datasets/puneet6060/intel-image-classification' target='_blank'>Intel Image Classification</a>).",
        "deliverable": "GitHub repository with full code, evaluation metrics, error analysis, and documented README."
      }
    },
    {
      "id": "ibm-step-7",
      "title": "7. Generative AI and LLMs: Architecture and Data Preparation",
      "badge": "Course 7 / 13",
      "duration": "6 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "Main Tool",
          "text": "Tokenizers (BPE, WordPiece), Vector Embeddings, Preprocessing Pipelines."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Generative vs. Discriminative AI paradigms.<br>• Evolution and core foundations of Large Language Models (LLMs).<br>• Tokenization strategies (BPE, WordPiece) & vector embeddings.<br>• Dataset collection, sanitation, and preprocessing pipelines for Generative models."
        },
        {
          "label": "Output",
          "text": "Understand Generative AI foundations and construct robust data preprocessing pipelines for LLM architectures."
        }
      ],
      "project": {
        "title": "Stage 7 — NLP Data Preparation & Sanitation",
        "task": "Process textual review datasets, eliminate duplicates/empty entries, and configure tokenization pipelines for sentiment analysis.",
        "source": "<a href='https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews' target='_blank'>IMDb Dataset of 50K Movie Reviews</a>.",
        "deliverable": "Sanitized and tokenized text dataset ready for modeling with full documentation of preprocessing steps."
      }
    },
    {
      "id": "ibm-step-8",
      "title": "8. Gen AI Foundational Models for NLP & Language",
      "badge": "Course 8 / 13",
      "duration": "10 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "Main Tool",
          "text": "Foundation Models, Hugging Face Hub, Evaluation Benchmarks."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Evolution of NLP architectures & Pre-trained Foundation Models.<br>• Semantic embeddings and context comprehension.<br>• Downstream task execution: Summarization, Sentiment Analysis, Text Classification.<br>• Benchmarking and qualitative evaluation of language models."
        },
        {
          "label": "Output",
          "text": "Leverage pretrained foundation models to execute summarization, sentiment analysis, and downstream NLP tasks."
        }
      ],
      "project": {
        "title": "Stage 8 — NLP Sentiment Analysis Model Benchmarking",
        "task": "Benchmark classical TF-IDF models against dense representations and sequence models (LSTM / Word2Vec) on identical data splits.",
        "source": "IMDb Dataset / Kaggle Movie Reviews",
        "deliverable": "Comparative performance report with concrete failure analysis on misclassified samples."
      }
    },
    {
      "id": "ibm-step-9",
      "title": "9. Generative AI Language Modeling with Transformers",
      "badge": "Course 9 / 13",
      "duration": "9 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "Main Tool",
          "text": "Transformers (BERT, GPT, T5), Self-Attention Mechanisms."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Transformer architecture deep dive: Encoder-Decoder mechanism.<br>• Self-Attention, Multi-Head Attention, Scaled Dot-Product Attention.<br>• Positional Encodings & Attention Masking techniques.<br>• Comparative study: Encoder-only (BERT), Decoder-only (GPT), Sequence-to-Sequence (T5)."
        },
        {
          "label": "Output",
          "text": "Deep architectural understanding of Attention layers, Transformer blocks, and encoder-decoder paradigms."
        }
      ],
      "project": {
        "title": "Stage 9 — Pretrained Transformer Inference Pipeline",
        "task": "Deploy a pretrained Transformer model (DistilBERT / RoBERTa) via Hugging Face to perform zero-shot and sentiment inference on ambiguous samples.",
        "source": "IMDb Dataset / Hugging Face Hub",
        "deliverable": "Inference notebook recording prediction logs and semantic edge cases."
      }
    },
    {
      "id": "ibm-step-10",
      "title": "10. Generative AI Engineering and Fine-Tuning Transformers",
      "badge": "Course 10 / 13",
      "duration": "8 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "Main Tool",
          "text": "Hugging Face Transformers, Prompt Engineering (CoT), BLEU / ROUGE."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Advanced Prompt Engineering: Few-Shot, Zero-Shot, Chain-of-Thought (CoT).<br>• Fine-tuning Transformer architectures via Hugging Face (transformers library).<br>• Domain specialization & task-specific adaptation.<br>• Text generation metrics: BLEU, ROUGE, and Perplexity."
        },
        {
          "label": "Output",
          "text": "Master advanced prompt engineering and fine-tune Transformer models for domain-specific language generation."
        }
      ],
      "project": {
        "title": "Stage 10 — Transformer Domain Fine-Tuning",
        "task": "Fine-tune a pretrained language model on the IMDb sentiment dataset using Hugging Face Trainer and evaluate accuracy improvements on test splits.",
        "source": "IMDb Dataset & Hugging Face Transformers",
        "deliverable": "Before-and-after evaluation logs with saved model checkpoints."
      }
    },
    {
      "id": "ibm-step-11",
      "title": "11. Generative AI Advanced Fine-Tuning for LLMs",
      "badge": "Course 11 / 13",
      "duration": "9 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "Main Tool",
          "text": "PEFT, LoRA, QLoRA, Quantization (4-bit/8-bit), RLHF."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Parameter-Efficient Fine-Tuning (PEFT) methodologies.<br>• LoRA (Low-Rank Adaptation) & QLoRA Implementation for memory/compute optimization.<br>• Quantization techniques (8-bit, 4-bit) for efficient model hosting.<br>• Reinforcement Learning from Human Feedback (RLHF) & Safety/Alignment techniques."
        },
        {
          "label": "Output",
          "text": "Apply state-of-the-art PEFT/LoRA adapters and quantization to fine-tune billion-parameter LLMs on modest hardware."
        }
      ],
      "project": {
        "title": "Stage 11 — LoRA & PEFT Parameter-Efficient Fine-Tuning",
        "task": "Implement LoRA adapters on the sentiment task instead of full fine-tuning. Benchmark parameter memory footprint, training duration, and test accuracy.",
        "source": "Hugging Face PEFT Library",
        "deliverable": "Comparative experiment report detailing compute efficiency vs full fine-tuning."
      }
    },
    {
      "id": "ibm-step-12",
      "title": "12. Fundamentals of AI Agents Using RAG and LangChain",
      "badge": "Course 12 / 13",
      "duration": "9 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "Main Tool",
          "text": "LangChain, ChromaDB, FAISS, Tools & Function Calling."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Retrieval-Augmented Generation (RAG) architecture and vector retrieval pipeline.<br>• Vector Databases: ChromaDB, FAISS, embeddings storage, and similarity querying.<br>• LangChain ecosystem: Chains, Memory, PromptTemplates, Output Parsers.<br>• Designing Autonomous AI Agents equipped with tools and function calling."
        },
        {
          "label": "Output",
          "text": "Build production-ready RAG retrieval pipelines and design autonomous tool-calling AI agents with LangChain."
        }
      ],
      "project": {
        "title": "Stage 12 — RAG Architecture Working Prototype",
        "task": "Build a document Q&A prototype that retrieves relevant passages from a custom document corpus, provides cited answers, and refuses to hallucinate when context is missing.",
        "source": "Custom Knowledge Documents (or <a href='https://hotpotqa.github.io/' target='_blank'>HotpotQA Dataset</a>)",
        "deliverable": "Working RAG prototype notebook with source attribution and hallucination guardrails."
      }
    },
    {
      "id": "ibm-step-13",
      "title": "13. Project: Generative AI Applications with RAG and LangChain",
      "badge": "Course 13 / 13 (Capstone)",
      "duration": "9 Hours",
      "items": [
        {
          "label": "Direct Course Link",
          "text": "<a href='https://www.coursera.org/professional-certificates/ai-engineer' target='_blank'>https://www.coursera.org/professional-certificates/ai-engineer</a>"
        },
        {
          "label": "Main Tool",
          "text": "LangChain, RAG Pipeline, Vector Stores, Gradio / Streamlit."
        },
        {
          "label": "Core Modules",
          "text": "<br>• Capstone Project: Production-grade End-to-End GenAI Application.<br>• Building a multi-document Question-Answering (QA) bot using LangChain & RAG.<br>• Vector store indexing, retriever tuning, and source citation integration.<br>• Developing and deploying an interactive UI using Gradio / Streamlit."
        },
        {
          "label": "Output",
          "text": "Develop and deploy a complete production-grade multi-document GenAI RAG application with an interactive user interface."
        }
      ],
      "project": {
        "title": "Stage 13 — Production GenAI Multi-Document RAG Capstone",
        "task": "Scale the RAG system into an enterprise assistant for a specific domain (University course materials, technical documentation) with a benchmark test suite of 20-30 queries and UI frontend.",
        "source": "Domain-specific document knowledge base",
        "deliverable": "Production-ready GenAI assistant deployed via Gradio / Streamlit with source citations and complete documentation."
      }
    }
  ]
};
